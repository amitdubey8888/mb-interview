
function Rows(props) {
  return (
    <tr>
        <th>{props.data['id']}</th>
        <th>{props.data['postId']}</th>
        <th>{props.data['name']}</th>
        <th>{props.data['email']}</th>
        <th>{props.data['body']}</th>
    </tr>
  );
}

export default Rows;
