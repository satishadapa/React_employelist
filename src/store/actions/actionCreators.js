import {GET_ERRORS } from "./types";

export function getErrors(errors) {
  return {
    type: GET_ERRORS,
    payload: errors
  }
}
