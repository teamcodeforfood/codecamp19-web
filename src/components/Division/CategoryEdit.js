import React, { useState } from "react";
import { Dialog } from "../Layout/Dialog";
import { Input, InputGroup } from "amino-ui";
import { fetcher } from "../../utils/fetcher";
import { toaster } from "evergreen-ui";

export const CategoryEdit = ({ open, onClose, categoryId, divisionId, id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [weight, setWeight] = useState("");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);

    const response = await fetcher(
      `${process.env.REACT_APP_API_URL}/events/${id}/divisions/${divisionId}/categories`,
      {
        method: "POST",
        body: JSON.stringify({})
      }
    );

    if (response) {
      toaster.success("Division details updated successfully");
    } else {
      toaster.danger("Couldn't update division details");
    }

    setSaving(false);

    // name: req.body.name,
    //   description: req.body.description,
    //   scale_min: req.body.scale_min,
    //   scale_max: req.body.scale_max,
    //   weight: req.body.weight,
    //   event_id: req.params.event_id,
    //   event_division_id: req.body.event_division_id,
  };

  return (
    <Dialog
      action={save}
      actionText="Save category"
      open={open}
      label="Edit category"
      onClose={onClose}
      saving={saving}
    >
      <InputGroup>
        <Input
          label="Category name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Input label="Min" value={min} onChange={e => setMin(e.target.value)} />
        <Input label="Max" value={max} onChange={e => setMax(e.target.value)} />
        <Input
          label="Weight"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </InputGroup>
    </Dialog>
  );
};
