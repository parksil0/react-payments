import React from 'react';
import { FlexCenter } from '../../common/styles';
import {
  Modal,
  ModalDimmed,
  ModalItemButton,
  ModalItemConatainer,
  ModalItemDot,
  ModalItemName,
} from './styles';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onClickSpace: () => void;
}

const cards = [
  { color: '#e24141', name: '포코 카드' },
  { color: '#547ce4', name: '준 카드' },
  { color: '#73BC6D', name: '공원 카드' },
  { color: '#DE59B9', name: '브랜 카드' },
  { color: '#04C09E', name: '로이드 카드' },
  { color: '#E76E9A', name: '도비 카드' },
  { color: '#F37D3B', name: '콜린 카드' },
  { color: '#FBCD58', name: '썬 카드' },
];

const index = ({ open, onClose, onClickSpace }: ModalProps) => {
  return (
    <ModalDimmed open={open} onClick={onClickSpace}>
      <Modal>
        {cards.map((card) => (
          <FlexCenter key={card.name}>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color={card.color}></ModalItemDot>
              <ModalItemName>{card.name}</ModalItemName>
            </ModalItemButton>
          </FlexCenter>
        ))}
      </Modal>
    </ModalDimmed>
  );
};

export default index;
