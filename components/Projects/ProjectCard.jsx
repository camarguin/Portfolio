import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import { CardContainer, CardTextContainer, CardTextH3, CardTextSpan } from './styles';

const ProjectCard = ({ projectImg, projectAlt, projectName, projectWebsite }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <CardContainer className="snip">
        <Image src={projectImg} alt={projectAlt} />
        <CardTextContainer>
          <div>
            <CardTextSpan>See Details</CardTextSpan>
          </div>
          <div>
            <CardTextH3>{projectName}</CardTextH3>
          </div>
          <a href="#" onClick={onOpen}></a>
        </CardTextContainer>
      </CardContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Test
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Button as="a" href={projectWebsite} _hover={{ cursor: 'pointer', backgroundColor: "#FFBE93" }} target="_blank" variant="solid" background="#E27D60" color="white">Visit website</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;