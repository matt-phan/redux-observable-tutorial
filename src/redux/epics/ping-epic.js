import { ofType } from "redux-observable";
import { map, delay } from "rxjs";

export const pingEpic = (action$) =>
  action$.pipe(
    ofType("PING"),
    delay(1000),
    map(() => ({ type: "PONG" })),
  );
