import jwtDecode from "jwt-decode";
import { fetcher } from "./fetcher";

export const joinTeam = (teamId, eventId) => {
  return new Promise(async (resolve, reject) => {
    // TODO: check if team is full
    const token = jwtDecode(localStorage.getItem("token"));

    const response = await fetcher(
      `${process.env.REACT_APP_API_URL}/events/${eventId}/teams/joinTeam`,
      {
        method: "POST",
        body: JSON.stringify({
          team_id: teamId,
          user_id: token.user.id
        })
      }
    );

    if (response) {
      resolve();
    } else {
      reject();
    }
  });
};
