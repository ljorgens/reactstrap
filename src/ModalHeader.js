import React from 'react';

function ModalHeader(props) {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag = 'h5',
    wrapTag: WrapTag = 'div',
    closeAriaLabel = 'Close',
    close,
    ...attributes
  } = props;


  if (!close && toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className='btn-close'
        aria-label={closeAriaLabel}
      />
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className='modal-title'>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );
}

export default ModalHeader;
