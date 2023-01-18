import styled from "styled-components";

export const ProductCard = styled.li`
  background-color: #fff;

  height: 340px;
  width: 25%;
  min-width: 220px;

  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;

  border: 3px solid #e0e0e0;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: smoothAppearance 3s ease 0s normal none;
`;

export const ProductFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e0e0e0;
  border-radius: 5px 5px 0 0;
  margin: 0;
  width: 100%;
  height: 40%;
`;

export const ProductImage = styled.img.attrs((props) => ({
  src: props.imageSrc,
  alt: props.imageAlt,
}))`
  src: ${({ imageSrc }) => imageSrc};
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  height: 100%;
  width: 100%;
  padding-left: 1.5rem;
`;

export const ProductCategory = styled.p`
  color: #828282;
  font-weight: 400;
  font-size: 12px;
`;

export const ProductValue = styled.p`
  color: #27ae60;
  font-weight: 600;
  font-size: 14px;
`;
