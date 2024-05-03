import styled from 'styled-components';
import {colors} from '../../styles/colors';

const ButtonPost = styled.button`
  background-color: ${colors.BROWN_40};
  width: 208px;
  height: 54px;
  border-radius: 200px;
  border: none;
  padding: 12px 24px;
  font-size: 20px;
  color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 8px;
  right: 8px;
`

function PostButton() {
  return(
    <a href="./"><ButtonPost>질문 작성하기</ButtonPost></a>
  )
}

export default PostButton;