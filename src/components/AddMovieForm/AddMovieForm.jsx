// import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Upload,
} from "antd";

// import { addMovie } from "../../redux/operations";
// import { selectMovies } from "../../redux/selectors";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AddMovieForm = () => {
  // const movies = useSelector(selectMovies);
  // const dispatch = useDispatch();

  // const addNewMovie = (newMovie) => {
  //   console.log(newMovie);
  //   // dispatch(addMovie(newMovie));
  // };

  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Title">
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Rating">
        <InputNumber max={10} min={1} defaultValue={10} />
      </Form.Item>
      <Form.Item label="Release date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Genre" name="genre" valuePropName="checked">
        <Checkbox.Group>
          <Checkbox value="drama">Drama</Checkbox>
          <Checkbox value="action">Action</Checkbox>
          <Checkbox value="comedy">Comedy</Checkbox>
          <Checkbox value="horror">Horror</Checkbox>
          <Checkbox value="adventure">Adventure</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="Actors">
        <Input />
      </Form.Item>
      <Form.Item label="Director">
        <Input />
      </Form.Item>
      <Form.Item
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload action="/upload.do" listType="picture-card">
          <button
            style={{
              border: 0,
              background: "none",
            }}
            type="button"
          >
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Image
            </div>
          </button>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add movie
      </Button>
    </Form>
  );
};

export default AddMovieForm;

// import { Formik, ErrorMessage, Field, Form } from "formik";
// import schema from "./schema";
// import initialValues from "./initialValues";

// {
//   /* <Formik
//   initialValues={initialValues}
//   validationSchema={schema}
//   onSubmit={(values, actions) => {
//     addNewMovie({ ...values, id: Date.now() });
//     actions.resetForm();
//   }}
// >
//   <Form>
//     <label>
//       Title
//       <Field name="title" type="text" placeholder="Title..." />
//       <ErrorMessage component="div" name="title" />
//     </label>
//     <label>
//       Description
//       <Field
//         name="description"
//         type="text"
//         as="textarea"
//         rows="5"
//         cols="33"
//         placeholder="Description..."
//       />
//       <ErrorMessage component="div" name="description" />
//     </label>
//     <label>
//       Rating
//       <Field
//         name="rating"
//         type="number"
//         placeholder="Rating..."
//         min={1} // Мінімальне значення
//         max={10} // Максимальне значення
//       />
//       <ErrorMessage component="div" name="rating" />
//     </label>
//     <button type="submit">Add new movie</button>
//   </Form>
// </Formik>; */
// }
