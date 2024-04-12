import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required field").trim(),
  description: Yup.string().required("Description is required field").trim(),
  rating: Yup.number()
    .required("Rating is required field")
    .min(1, "Rating cann't be lowew 1")
    .max(10, "Rating cann't be higher 10"),
  release_date: Yup.string()
    .required("Release date is required field")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Release date must be in the format YYYY-MM-DD"
    )
    .trim(),
  genre: Yup.array()
    .required("Genre is required field")
    .of(Yup.string().required().trim()),
  actors: Yup.array()
    .required("Actors is required field")
    .of(Yup.string().required().trim()),
  director: Yup.string().required("Director is required field").trim(),
  image: Yup.mixed().required("Image is required"),
});

export default schema;
