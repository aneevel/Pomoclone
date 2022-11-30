export interface Task {
    description: string;
    pomodorosToComplete: number;
    pomodorosCompleted: number;
}

export const TASKS = [
    { description: 'Do WebDev exercises', pomodorosToComplete: 2, pomodorosCompleted: 0 },
    { description: 'Work on Game', pomodorosToComplete: 2, pomodorosCompleted: 0},
    { description: 'Play rhythm guitar', pomodorosToComplete: 3, pomodorosCompleted: 0}
]
