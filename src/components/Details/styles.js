import styled from 'styled-components';
import {Row, Button} from "antd";

export const Wrapper = styled.div`
padding-right: 20%;
padding-left: 20%;
padding-top:3%;
margin-bottom:1%;
}
`;
export const RowCustom = styled(Row)`
width:100%;
height: 50rem;
background-color: #ffffff;
padding: 2%;
}
`;
export const Title = styled.p`
margin-top:1%;
font-weight:bold;
fontd-size:2rem;
}
`;
export const TitlePrice = styled.p`
margin-top:5%;
font-size:3rem;
}
`;

export const TitleDescription = styled.p`
padding-top: 15%;
font-size:2rem;
float: left;
padding-left:1%
}
`;

export const ButtonCustom = styled(Button)`
width:100%;
}
`;