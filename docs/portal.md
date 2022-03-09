# Create a React Portal for Modals and Slide-outs
we use Portals to implement overlay content to avoid semantically bad practices and render cleaner and accessible content

## portals need 2 things:
- a place you want to port the component to 
- let the component know

### in index.html
- add 
  - div#backdrop-root
  - div#overlay-root
- the overlay-root will be a reusable component to contain all the different modals, side drawers, etc.

### structure the modal
modal elements should be direct children of the body, and siblings to the root div
- create a Modal Component with subcomponents
  - these may be code split for reusability
  - create a ModalBackdrop component
  - create a ModalOverlay component

- in the Modal Component
  - import ReactDOM from 'react-dom';
  - in the return Fragment call createPortal to "portal" the rendering of a virtual DOM element onto another element(<reactNodeToRenderinJSX onEvent={onEventHandler}/>, document.getElementById(IdOfRealDOMContainer) )
    - hang the modalBackdrop on backdrop-root
    - hang the modalOverlay on overlay-root


### Need to assss accessibility of modal

## Creating the Hamburger Nav Menu
- Create a NavModal Component
- import:
  - Backdrop (transparent)
  - MenuOverlay (contains Links)