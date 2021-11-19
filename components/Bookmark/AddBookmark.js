import React, { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputRightAddon,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function AddBookmark({ addBookmark }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [newData, setNewData] = useState({ names: "", urls: "" });

  const handleNameChange = (e) => {
    setNewData({ names: e.target.value });
  };
  const handleUrlChange = (e) => {
    setNewData({ ...newData, urls: e.target.value });
  };

  const submitBookmark = (e) => {
    e.preventDefault();
    console.log("------>", newData);
    addBookmark(newData);
    setNewData({ names: "", urls: "" });
  };

  return (
    <>
      <Button onClick={onOpen} w="25%">
        Add Bookmark
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Add Bookmark</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Input
              placeholder="Name"
              value={newData.names}
              type="text"
              onChange={handleNameChange}
            />
            <InputGroup size="sm">
              <InputLeftAddon children="https://" />
              <Input
                placeholder="URL"
                value={newData.urls}
                type="text"
                onChange={handleUrlChange}
              />              
            </InputGroup>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={submitBookmark} colorScheme="red" ml={3}>
              Save
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AddBookmark;
