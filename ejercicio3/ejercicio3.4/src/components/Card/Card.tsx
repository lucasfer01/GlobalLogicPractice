import './Card.css';

export interface Props {
  title: string;
  description: string;
  image: string;
}

export const Card = ({ title, description, image }: Props) => {
  return (
    <div className='Card__container'>
      <img src={image} alt='Item' className='Card__img'/>

      <div style={{width: '90%', height: '1px', backgroundColor: 'white', marginBottom: '1rem'}}></div>

      <h2 className='Card__h2'>{title}</h2>

      <span className='Card__span'>{description}</span>
    </div>
  );
};
