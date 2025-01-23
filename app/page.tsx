"use client";

import { Schedule, Scope } from "./types";
import { useEffect, useState } from "react";

import Image from "next/image";
import LoadingIndicator from "./components/Loading";
import MyAwesomeError from "./components/Error";
import TableGrid from "./components/TableGrid";
import moment from "moment";

async function getSchedule() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/automated`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const WholePayload = await response.json();
    const ParsedData: Schedule = WholePayload.data;

    return ParsedData;
  } catch (error) {
    console.error("Failed to fetch schedule:", error);
    return null;
  }
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ParsedData, setParsedData] = useState<Schedule | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getSchedule();

      setParsedData(data);
      setIsLoaded(true);
    }
    fetchData();
  }, []);
  if (!isLoaded) {
    return <LoadingIndicator />;
  }

  if (!ParsedData) {
    return <MyAwesomeError />;
  }
  const IsAfterNoon = moment().isAfter(moment().hour(12).minute(0).second(0));
  const DisplayOrder = (): Scope[] => {
    return IsAfterNoon ? ["tomorrow", "today"] : ["today", "tomorrow"];
  };
  const isHoliday = () => {
    // Holiday Consider is when the parsed data is empty
    // or the parsed data has only first period and it's empty and has no second period
    return (
      ParsedData.today.length === 0 ||
      (ParsedData.today.length === 1 &&
        ParsedData.today[0].LectureName === "" &&
        ParsedData.today[0].period === 1)
    );
  };
  return (
    <div className="flex flex-col gap-8 px-8 py-24 lg:py-0 min-h-screen ">
      <main className="flex flex-col gap-3  m-auto">
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src="/iti.png"
            alt="ITI Logo"
            width={200}
            height={200}
            className="rounded-lg w-12"
            priority
          />
          <h1 className="text-xl font-bold bg-gradient-to-br from-fuchsia-500 to-rose-500 text-transparent bg-clip-text text-center">
            We are ITI Alexandria PWD Intake 45
          </h1>
        </div>
        {!isHoliday() ? (
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            {DisplayOrder().map((scope, index) => (
              <TableGrid key={index} data={ParsedData} scope={scope} />
            ))}
          </div>
        ) : (
          <div className="text-center text-lg font-medium">
            Enjoy Your Holiday! 😊 No lectures scheduled for today.
          </div>
        )}
      </main>
    </div>
  );
}
