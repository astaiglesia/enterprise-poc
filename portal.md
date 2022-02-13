# Create a React Portal for Modals and Slide-outs

use should use Portal to implement overlay content to avoid semantically bad practice and render cleaner and accessible content
- create the modal component
- create the backdrop component

we want the backdrop to be a direct, first child of the body
also, the modal should be the second child, directly after the backdrop 
both are siblings to the root div

- in index.html, add div#backdrop-root + div#overlay-root
the overlay-root can contain all the different modals, side drawers, etc 

in the modal component, create Backdrop and ModalOverlay components
- import { createPortal } from 'react-dom';
- 