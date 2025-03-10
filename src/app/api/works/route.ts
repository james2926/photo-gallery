import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const worksDir = path.join(process.cwd(), "public/images/works");

  try {
    if (category === "all") {
      const categories = fs
        .readdirSync(worksDir)
        .filter((item) => fs.statSync(path.join(worksDir, item)).isDirectory());

      let allWorks: any[] = [];
      categories.forEach((cat) => {
        const categoryPath = path.join(worksDir, cat);
        const files = fs
          .readdirSync(categoryPath)
          .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
          .map((file) => ({
            src: `/images/works/${cat}/${file}`,
            category: cat.toUpperCase(),
            title: file.replace(/\.(jpg|jpeg|png|gif)$/i, ""),
          }));
        allWorks.push(...files);
      });

      return NextResponse.json(allWorks);
    } else {
      const categoryPath = path.join(worksDir, category as string);

      if (!fs.existsSync(categoryPath)) {
        return NextResponse.json([]);
      }

      const works = fs
        .readdirSync(categoryPath)
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map((file) => ({
          src: `/images/works/${category}/${file}`,
          category: category?.toUpperCase(),
          title: file.replace(/\.(jpg|jpeg|png|gif)$/i, ""),
        }));

      return NextResponse.json(works);
    }
  } catch (error) {
    console.error("Error reading works directory:", error);
    return NextResponse.json([]);
  }
}
