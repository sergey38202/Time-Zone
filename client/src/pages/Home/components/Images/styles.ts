import styled from 'styled-components';

import gallery1Image from "../../../../assets/gallery1.png.webp";
import gallery2Image from "../../../../assets/gallery2.png.webp";
import gallery3Image from "../../../../assets/gallery3.png.webp";
import gallery4Image from "../../../../assets/gallery4.png.webp";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  height: 690px;
  padding-bottom: 250px;
`;

export const Image1 = styled.div`
  background-image: url(${gallery1Image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 690px;
  width: 100%;
  max-width: 720px;
`;

export const Image2 = styled.div`
  background-image: url(${gallery2Image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 690px;
  width: 100%;
  max-width: 345px;
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  width: 100%;
  max-width: 345px;
`;

export const Image3 = styled.div`
  background-image: url(${gallery3Image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 330px;
  width: 100%;
`;

export const Image4 = styled.div`
  background-image: url(${gallery4Image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 330px;
  width: 100%;
`;