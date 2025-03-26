import { Table, Pagination } from 'react-bootstrap';
import { Loader } from '../../../utils/tools';

const PaginateComponent = ({
  articles,
  goToEdit,
  goToPrevPage,
  goToNextPage,
}) => {
  return (
    <>
      {articles && articles.docs ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Created</th>
                <th>Title</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {articles.docs.map((item) => (
                <tr key={item._id}>
                  <td>{item.date}</td>
                  <td>{item.title}</td>
                  <td>{item.score}</td>
                  <td
                    className="action_btn remove_btn"
                    onClick={() => alert('remove')}
                  >
                    Remove
                  </td>
                  <td
                    className="action_btn edit_btn"
                    onClick={() => goToEdit(item._id)}
                  >
                    Edit
                  </td>
                  <td
                    className="action_btn status_btn"
                    onClick={() => alert('change status')}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {articles.hasPrevPage ? (
              <>
                <Pagination.Prev />
                <Pagination.Item>{articles.prevPage}</Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{articles.page}</Pagination.Item>
            {articles.hasNextPage ? (
              <>
                <Pagination.Item>{articles.nextPage}</Pagination.Item>
                <Pagination.Next />
              </>
            ) : null}
          </Pagination>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PaginateComponent;
