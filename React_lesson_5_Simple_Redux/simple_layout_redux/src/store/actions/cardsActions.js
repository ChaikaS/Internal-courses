export const ADD_CARDS = "ADD_CARDS";
export const REMOVE_CARDS = "REMOVE_CARDS";

export function createCards(data) {
  return {
    type: ADD_CARDS,
    payload: {
      data,
    },
  };
}
export function removeCards(id) {
  return {
    type: REMOVE_CARDS,
    payload: {
      id,
    },
  };
}
