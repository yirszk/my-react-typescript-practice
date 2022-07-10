type Coffee = {
  title: string;
  description: string;
  ingredients?: string[] | null;
  image: string;
  id: number;
};

export const Card = (props: Coffee) => {
  return (
    <>
      <div>
        <b>{props.title}</b>: {props.description}
        <br />
      </div>
    </>
  );
};
