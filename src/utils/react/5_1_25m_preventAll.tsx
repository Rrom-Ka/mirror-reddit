import { preventDefault } from "./5_1_21m_preventDefault";
import { stopPropagation } from "./5_1_24_stopPropagation";

export function preventAll<T extends (e: any) => void>(fn: T) {
  return preventDefault(stopPropagation(fn));
}
