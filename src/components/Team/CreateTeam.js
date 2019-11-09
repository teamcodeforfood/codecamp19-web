import React, { useState } from "react";
import styled from "styled-components";
import { InputGroup, Input, Select } from "amino-ui";
import { fetcher } from "../../utils/fetcher";
import { useInput } from "react-hanger";
import { Dialog } from "../Layout/Dialog";

export const CreateTeam = ({ title, open, onClose, eventId }) => {
  const name = useInput("");
  const [division, setDivision] = useState(0);

  const divisions = [
    {
      label: "Division 1",
      value: 1
    }
  ];

  const save = async () => {
    try {
      const response = await fetcher(
        `${process.env.REACT_APP_API_URL}/events/${eventId}/teams`,
        {
          method: "POST",
          body: JSON.stringify({
            name: name.value,
            division_id: 1 // TODO: actual division from dropdown
          })
        }
      );

      const { team } = await response.json();

      console.log(team);
    } catch (e) {
      alert("error");
    }
  };

  return (
    <Dialog open={open} label={title} onClose={onClose} action={save}>
      <InputGroup>
        <Input label="Team name" {...name} />
        <Select
          label="Division"
          items={divisions}
          onChange={setDivision}
          defaultValue={division}
        />
      </InputGroup>
    </Dialog>
  );
};
