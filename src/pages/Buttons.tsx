import Button from "../components/Button";

const Buttons = () => {
  return (
    <div id="buttons">
      <h2 className="font-medium text-3xl">Buttons</h2>

      <p className="my-2">Filled Buttons-</p>
      <div className="flex gap-3">
        <Button color="primary">Primary</Button>
        <Button color="light">Light</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
        <Button color="success">Success</Button>
        <Button color="dark">Dark</Button>
      </div>

      <p className="my-2 mt-3">Outlined Buttons-</p>
      <div className="flex gap-3">
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="light" variant="outlined">
          Light
        </Button>
        <Button color="warning" variant="outlined">
          Warning
        </Button>
        <Button color="danger" variant="outlined">
          Danger
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="dark" variant="outlined">
          Dark
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
