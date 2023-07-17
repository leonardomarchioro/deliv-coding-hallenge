export default function capitalizeFirstLetter(str: string = ""): string {
    return str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  }