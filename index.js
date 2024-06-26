import { default as Replicate } from "replicate";
// for local files use the below
// import { readFile } from "node:fs/promises";
// const input_image = await readFile("./path/to/my/input_image.jpg");
import "dotenv/config";

const token = process.env.REPLICATE_API_TOKEN;

const replicate = new Replicate({
  auth: token,
});

const model = "tencentarc/photomaker";
const version =
  "tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4";

async function main() {
  const input = {
    prompt:
      "A man img riding in a Ford Bronco with a black man driving the vehicle",
    num_steps: 50,
    style_name: "Disney Charactor",
    input_image:
      "https://replicate.delivery/pbxt/LA2UFRD8yer0sDm26K0k7lZSk2Kdew84tj7z8xVylAY53DpI/tylerheadshot-23.png",
    input_image:
      "https://www.smartbrief.com/wp-content/uploads/2023/01/TylerBishop-Ezoic.jpg",
    num_outputs: 2,
    guidance_scale: 5,
    negative_prompt:
      "realistic, photo-realistic, worst quality, greyscale, bad anatomy, bad hands, error, text",
    style_strength_ratio: 35,
  };

  try {
    const output = await replicate.run(version, { input });
    console.log(output);
  } catch (err) {
    console.error("Uh oh, an error occurred.");
    console.error(err);
  }
}

main();
