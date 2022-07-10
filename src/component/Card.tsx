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
      <div className="my-2">
        <b>{props.title}</b>: {props.description}
        <br />
      </div>
    </>
  );
};
