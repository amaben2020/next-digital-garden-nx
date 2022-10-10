export interface YoutubeProps {
  title: string;
  uid: string;
}

export function Youtube(props: YoutubeProps) {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height={500}
        title={props.title}
      ></iframe>
    </div>
  );
}

export default Youtube;
