import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  info(...args: any[]): void {
    console.info('info:', ...args);
  }

  log(...args: any[]): void {
    console.log('log:', ...args);
  }

  warn(...args: any[]): void {
    console.warn('warn:', ...args);
  }

  error(...args: any[]): void {
    console.error('error:', ...args);
  }
}
