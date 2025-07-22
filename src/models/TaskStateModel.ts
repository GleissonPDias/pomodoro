import type { TaskModel } from "./TaskModel";

// estado -> componente -> filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, mainform
  secondsRemaining: number; // home, countdown, historico, mainform, button
  formattedSecondsRemaining: string; // titulo, countdown
  activeTask: TaskModel | null; // countdown, historico, mainform, button
  currentCycle: number; // home
  config: {
    // mainform
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
