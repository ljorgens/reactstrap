import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

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

  const classes = mapToCssModules(
    classNames(className, 'modal-header'),
    cssModule,
  );

  if (!close && toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className={mapToCssModules('btn-close', cssModule)}
        aria-label={closeAriaLabel}
      />
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );
}

export default ModalHeader;
