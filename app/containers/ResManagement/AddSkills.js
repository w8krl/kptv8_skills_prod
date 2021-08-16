import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";

export default function OutlinedChips() {
  const [hashtag, setHashtag] = useState("");
  const [numberOfHashtags, setNumberOfHashtags] = useState(0);
  const [arrayOfHashtags, addHashtag] = useState([]);
  const handleDelete = (h) => () => {
    addHashtag((arrayOfHashtags) =>
      arrayOfHashtags.filter((hashtag) => hashtag !== h)
    );
  };
  const handleHashtagChange = (event) => setHashtag(event.target.value);

  const handleEnterButton = (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
      newHashtag();
      setHashtag("");
    }
  };

  const newHashtag = () => {
    if (numberOfHashtags < 10) {
      setNumberOfHashtags(numberOfHashtags + 1);
      addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag.trim()));
    } else {
      console.log("Too much hashtags");
    }
  };
  const Hashtags = arrayOfHashtags.map((h) => (
    <Chip
      size="large"
      avatar={<Avatar>#</Avatar>}
      label={h}
      onDelete={handleDelete(h)}
    />
  ));
  console.log(arrayOfHashtags);
  return (
    <div>
      <TextField
        size="small"
        inputProps={{
          style: { fontSize: 15 }
        }}
        fullWidth
        id="outlined-multiline-static"
        rows={1}
        placeholder="Key Skills"
        variant="outlined"
        value={hashtag}
        onChange={handleHashtagChange}
        onKeyPress={handleEnterButton}
      />

      {numberOfHashtags > 0 ? Hashtags : ""}
    </div>
  );
}
