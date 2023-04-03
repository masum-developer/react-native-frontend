import { styled } from "@mui/system";

export const ButtonComp = styled('button')((props) => ({
    background: props.background ? props.background : '#CDC0F8',
    borderRadius: '5px',
    width: props.myWidth ? props.myWidth : '110px',
    height: '45px',
    color: props.color ? props.color : 'black',
    border: 'none',
    fontFamily: 'Heebo',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '29px',
    cursor: 'pointer'

}));