import React from 'react';
import Container from '../Container';
import * as S from './styles';

type Title = { title: string };

export default function SectionTitle({ title }: Title) {
  return (
    <Container>
      <S.AlignItens>
        <span>
          <strong>{title.toUpperCase()}</strong>
        </span>
        <S.Underline />
      </S.AlignItens>
    </Container>
  );
}
