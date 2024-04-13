import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  // DatePicker,
  Form,
  Input,
  InputNumber,
  Upload,
} from "antd";
import { useFormik } from "formik";

import { addMovie } from "../../redux/operations";
import validationSchema from "./validationSchema";
import initialValues from "./initialValues";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AddMovieForm = () => {
  const dispatch = useDispatch();

  const checkStatus = (value) => {
    if (formik.touched[value] && !formik.errors[value]) {
      return "success";
    } else if (formik.errors[value]) {
      return "error";
    }
    return "";
  };

  const handleSubmit = (values) => {
    const actors = [values.actors]
    const newMovie = {
      ...values,
      actors,
      id: String(Date.now()),
    };
    dispatch(addMovie(newMovie));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Form onFinish={formik.handleSubmit}>
      <Form.Item
        label="Title"
        help={formik.errors.title}
        validateStatus={checkStatus("title")}
        hasFeedback
      >
        <Input
          placeholder="Title..."
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
          required
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        label="Description"
        help={formik.errors.description}
        validateStatus={checkStatus("description")}
        hasFeedback
      >
        <TextArea
          rows={4}
          placeholder="Type description..."
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
          required
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        label="Rating"
        help={formik.errors.rating}
        validateStatus={checkStatus("rating")}
        hasFeedback
      >
        <InputNumber
          max={10}
          min={1}
          defaultValue={10}
          value={formik.values.rating}
          // onChange={formik.handleChange}
          name="rating"
          required
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        label="Release date"
        help={formik.errors.release_date}
        validateStatus={checkStatus("release_date")}
      >
        <Input
          placeholder="2021-12-15..."
          value={formik.values.release_date}
          onChange={formik.handleChange}
          name="release_date"
          required
          onBlur={formik.handleBlur}
        />
        {/* <DatePicker /> */}
      </Form.Item>
      <Form.Item
        label="Genre"
        name="genre"
        valuePropName="checked"
        help={formik.errors.genre}
        hasFeedback
      >
        <Checkbox.Group>
          <Checkbox value="drama">Drama</Checkbox>
          <Checkbox value="action">Action</Checkbox>
          <Checkbox value="comedy">Comedy</Checkbox>
          <Checkbox value="horror">Horror</Checkbox>
          <Checkbox value="adventure">Adventure</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        label="Actors"
        help={formik.errors.actors}
        validateStatus={checkStatus("actors")}
        hasFeedback
      >
        <Input
          placeholder="Actors..."
          value={formik.values.actors}
          onChange={formik.handleChange}
          name="actors"
          required
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        label="Director"
        help={formik.errors.director}
        validateStatus={checkStatus("director")}
        hasFeedback
      >
        <Input
          placeholder="Director..."
          value={formik.values.director}
          onChange={formik.handleChange}
          name="director"
          required
          onBlur={formik.handleBlur}
        />
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