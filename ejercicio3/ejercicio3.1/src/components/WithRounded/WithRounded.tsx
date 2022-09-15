
interface Props {
    rounded?: boolean;
    text: string;
}

const WithRounded = (Component: React.ElementType) => {

  return ({rounded,...props}: Props) => {

    if(rounded) return <Component {...props} style={{ borderRadius: '50%', backgroundColor: 'Green' }}/>

    return <Component {...props}/>
  }
}

export default WithRounded;