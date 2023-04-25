import Item from "./Item/Item";

export default function MainContent() {
  const description =
    "Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque.";
  const description2 =
    "Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula.";

  return (
    <>
      <Item
        Title="title Heading"
        Subtitle="Titre Description"
        Picture="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?w=996&t=st=1682344034~exp=1682344634~hmac=e2f96fcf381433aaf5a77745ab7c8284e626eda4ca7d4aee740a4a71a32050eb"
        Alt="Photo Paysage"
        Description={description}
      />
      <Item
        Title="title Heading"
        Subtitle="Titre Description"
        Picture="https://img.freepik.com/photos-gratuite/beau-tir-lac-cristallin-cote-base-montagne-enneigee-au-cours-journee-ensoleillee_181624-5459.jpg?w=900&t=st=1682345626~exp=1682346226~hmac=d7fe90491d0b4bbe069102446125df76be9bbe576f0584bbf5f54be02ec1ddd2"
        Alt="Photo Paysage"
        Description={description2}
      />
    </>
  );
}
