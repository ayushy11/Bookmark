import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

function AddBookmark({ addBookmark }) {
  const [data, setData] = useState({ data: "" });

  const handleInputChange = (e) => {
    setData({ data: e.target.value });
  };

  const submitBookmark = (e) => {
    e.preventDefault();
    addBookmark(data.data);
    setData({ data: "" });
  };

  return (
    <Flex>
      <Input
        placeholder="Name"
        value={data.data}
        type="text"
        onSubmit={submitBookmark}
        onChange={handleInputChange}
      ></Input>
      <Input placeholder="URL"></Input>
      <Button onClick={submitBookmark}>ADD</Button>
    </Flex>
  );
}

export default AddBookmark;
