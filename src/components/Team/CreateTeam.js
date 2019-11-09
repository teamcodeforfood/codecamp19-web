import React, { useState } from "react";
import styled from "styled-components";
import { InputGroup, Input, Select } from "amino-ui";
import { fetcher } from "../../utils/fetcher";
import { useInput } from "react-hanger";
import { Dialog } from "../Layout/Dialog";
import useSWR from "swr";
import { joinTeam } from "../../utils/joinTeam";

export const CreateTeam = ({ title, open, onClose, eventId }) => {
  const name = useInput("");
  const [division, setDivision] = useState(-1);

  const { data: divisions } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${eventId}/divisions`,
    fetcher
  );

  const getItems = () => {
    return [{ id: -1, name: "Select division" }, ...divisions.divisions];
  };

  const save = async () => {
    if (division === -1) {
      alert("no");
    }

    // TODO: join immediately after creating

    try {
      const { team } = await fetcher(
        `${process.env.REACT_APP_API_URL}/events/${eventId}/teams`,
        {
          method: "POST",
          body: JSON.stringify({
            name: name.value,
            event_division_id: division,
            event_id: Number(eventId)
          })
        }
      );

      if (team) {
        joinTeam(team.id, eventId)
          .then(onJoin)
          .catch(onClose);
      }

      console.log(team);
    } catch (e) {
      alert("error");
    }
  };

  const onJoin = () => {
    alert("it works");
    onClose();
  };

  return (
    <Dialog
      action={save}
      actionText="Create team"
      open={open}
      label={title}
      onClose={onClose}
    >
      {divisions ? (
        <InputGroup>
          <Input label="Team name" {...name} />
          <Select
            label="Division"
            items={getItems()}
            onChange={setDivision}
            itemValuePath="id"
            itemLabelPath="name"
          />
        </InputGroup>
      ) : null}
    </Dialog>
  );
};
