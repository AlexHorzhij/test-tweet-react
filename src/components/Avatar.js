import { Circle, Foto, Image, FotoContainer } from './Avatar.styled';

export const Avatar = ({ foto }) => {
  return (
    <Image>
      <Circle />
      <FotoContainer>
        <Foto image={foto} />
      </FotoContainer>
    </Image>
  );
};
