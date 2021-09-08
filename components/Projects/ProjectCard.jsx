import React from 'react';
import Image from 'next/image';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react"
import { CardContainer, CardTextContainer, CardTextH3, CardTextA, CardOverlayBackground, CardTechIcons, ModalPContainer } from './styles';

const ProjectCard = ({ projectImg, projectName, projectWebsite, projectTechs, projectDescription, projectDescriptionTechs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <CardContainer className="snip" backgroundImg={projectImg}>
        <CardTextContainer>
          <CardOverlayBackground />
          <div>
            <CardTechIcons>
              {projectTechs}
            </CardTechIcons>
          </div>
          <div>
            <CardTextA href="#" onClick={onOpen}>See Details</CardTextA>
          </div>
          <div>
            <CardTextH3>{projectName}</CardTextH3>
          </div>
        </CardTextContainer>
      </CardContainer>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{projectName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalPContainer>
              {projectDescription}
            </ModalPContainer>
            <ModalPContainer>
              <strong>Technologies:</strong> {projectDescriptionTechs}
            </ModalPContainer>
          </ModalBody>
          <ModalFooter>
            <Button as="a" href={projectWebsite} _hover={{ cursor: 'pointer', backgroundColor: "#FFBE93" }} target="_blank" variant="solid" background="#E27D60" color="white">
              Visit website
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;