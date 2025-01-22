interface PeriodItem {
    period: number;
    time: string;
    LectureName: string | undefined;
    InstructorName: string | undefined;
    LectureLocation: string | undefined;
}
type Schedule = {
    today: PeriodItem[];
    tomorrow: PeriodItem[];
}

type Scope = "today" | "tomorrow";

export type {
    Schedule,
    PeriodItem,
    Scope
}