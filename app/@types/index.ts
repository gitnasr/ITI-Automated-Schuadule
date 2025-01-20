interface PeriodItem {
    period: number;
    time: string;
    LectureName: string;
    InstructorName: string;
    LectureLocation: string;
}
type Schedule = {
    today: PeriodItem[];
    tomorrow: PeriodItem[];
}

export type {
    Schedule,
    PeriodItem,
}