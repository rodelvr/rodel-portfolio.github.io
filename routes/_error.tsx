import { Head } from "fresh/runtime";
import { HttpError } from "fresh";
import { define } from "../utils.ts";
import { ButtonLink } from "../components/ui/button.tsx";
import { AlertCircle, ArrowRight } from "../components/ui/icons.tsx";
import { Container } from "../components/ui/section.tsx";

export default define.page(function ErrorPage(ctx) {
  const status = ctx.error instanceof HttpError ? ctx.error.status : 500;
  const title = status === 404 ? "404 - Page not found" : `${status} - Oh no…`;
  const message = status === 404
    ? "The page you were looking for doesn't exist."
    : "Something went wrong on my side. Please try again later.";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container class="flex flex-col items-center justify-center py-32 text-center">
        <span class="mb-6 flex size-14 items-center justify-center rounded-full bg-muted">
          <AlertCircle class="size-7 text-muted-foreground" />
        </span>
        <h1 class="text-4xl font-semibold tracking-tight">{title}</h1>
        <p class="mt-4 max-w-md text-muted-foreground">{message}</p>
        <ButtonLink href="/" class="mt-8">
          Go back home
          <ArrowRight />
        </ButtonLink>
      </Container>
    </>
  );
});
