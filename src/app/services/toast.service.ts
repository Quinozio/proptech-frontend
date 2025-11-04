import { Injectable, signal, WritableSignal } from "@angular/core";

export type ToastType = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number; // in milliseconds, default 3000
  position?: ToastPosition; // default 'bottom-center'
}

@Injectable({
  providedIn: "root",
})
export class ToastService {
  toasts: WritableSignal<Toast[]> = signal([]);
  private nextId = 0;

  show(
    message: string,
    type: ToastType,
    duration?: number,
    position?: ToastPosition
  ): void {
    const id = (this.nextId++).toString();
    const newToast: Toast = {
      id,
      message,
      type,
      duration: duration || 3000,
      position: position || "bottom-center",
    };
    this.toasts.update((currentToasts) => [...currentToasts, newToast]);

    setTimeout(() => this.remove(id), newToast.duration);
  }

  remove(id: string): void {
    this.toasts.update((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }

  success(message: string, duration?: number, position?: ToastPosition): void {
    this.show(message, "success", duration, position);
  }

  error(message: string, duration?: number, position?: ToastPosition): void {
    this.show(message, "error", duration, position);
  }

  warning(message: string, duration?: number, position?: ToastPosition): void {
    this.show(message, "warning", duration, position);
  }

  info(message: string, duration?: number, position?: ToastPosition): void {
    this.show(message, "info", duration, position);
  }
}
