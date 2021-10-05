import styled from "styled-components";

//styling components
const StyledQuestionRow = styled.div`
background-color:rgba(255,255,255,.05);
margin-top:20px;
padding: 10px;
display:grid;
grid-template-columns:50px 50px 50px 1fr;
`;

const QuestionState = styled.div`
 text-align:center;
 display:inline-block;
 font-size:1.2rem;
 color:#ccc;
 margin-top:6px;
 span{
     font-size:.7rem;
     display:block;
     font-weight:300;
     margin-top:4px;
 }
 `;

const QuestionArea = styled.div`
 padding:0 20px;
 `;

const Tag = styled.span`
 dispaly:inline-block;
 margin-right:5px;
 background-color:#3e4a52;
 color:#9cc3db;
 padding: 7px;
 border-radius:4px;
 font-size: .9rem;
 padding-top:2px;
 `;

const QuestionLink = styled.a`
 text-decoration:none;
 color:#3ca4ff;
 font-size:1.1rem;
 display:block;
 margin-bottom: 5px;
 `;

const WhoAndWhen = styled.div`
 display: inline-block;
 color:#aaa;
 font-size:.8rem;
 float:right;
 padding: 10px 0;
 `;

const UserLink = styled.a`
 color:#3ca4ff;
 `;

const StyledPara = styled.p`
 font-size:.8rem;
 `;

function QuestionRow() {
    return (
        <>
            <StyledQuestionRow>
                <QuestionState>0<span>votes</span></QuestionState>
                <QuestionState>1<span>answers</span></QuestionState>
                <QuestionState>4<span>views</span></QuestionState>
                <QuestionArea>
                    <QuestionLink>Difference about Ternary Operator in JavaScript</QuestionLink>
                    <StyledPara>As you can see in JavaScript, there is an expression called Ternary Operator. What is the difference between condition ? a = 1 : a = 2 and a = condition ? 1 : 2 Do they both have the same speed?</StyledPara>
                    <Tag>javascript</Tag>
                    <Tag>parsing</Tag>
                    <Tag>quotes</Tag>
                    <Tag>literals</Tag>
                    <WhoAndWhen>asked 2 mins ago <UserLink>Joyce</UserLink></WhoAndWhen>
                </QuestionArea>

            </StyledQuestionRow>
        </>
    );
}

export default QuestionRow;