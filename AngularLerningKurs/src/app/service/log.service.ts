import { Injectable } from '@angular/core';


@Injectable()
export class LogService {

  logger(log: number) {
    console.log(log);
  }
}
