import "mutationobserver-shim";
import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { submitContactForm } from "@api/contact-form";
import { ContactForm } from "@components/forms/ContactForm";

global.MutationObserver = window.MutationObserver;

// TODO: Fix this...

vi.mock("utils/api");

describe("Contact Form", () => {
  beforeEach(async () => {
    render(<ContactForm />);
    await waitFor(() => {});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should display required error when value is invalid", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(3);
    expect(submitContactForm).not.toBeCalled();
  });

  it("should display min length error when name is invalid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Jane Doe"), {
      target: {
        value: "n",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("hi@jane.com"), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Hi, my name is Jane..."), {
      target: {
        value: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(submitContactForm).not.toBeCalled();
    expect((screen.getByPlaceholderText("Jane Doe") as HTMLInputElement).value).toBe("n");
    expect((screen.getByPlaceholderText("hi@jane.com") as HTMLInputElement).value).toBe(
      "test@mail.com",
    );
    expect((screen.getByPlaceholderText("Hi, my name is Jane...") as HTMLInputElement).value).toBe(
      "Somewhere in La Mancha, in a place whose name I do not care to remember…",
    );
  });

  it("should display matching error when email is invalid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Jane Doe"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("hi@jane.com"), {
      target: {
        value: "test",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Hi, my name is Jane..."), {
      target: {
        value: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(submitContactForm).not.toBeCalled();
    expect((screen.getByPlaceholderText("hi@jane.com") as HTMLInputElement).value).toBe("test");
    expect((screen.getByPlaceholderText("Jane Doe") as HTMLInputElement).value).toBe("name");
    expect((screen.getByPlaceholderText("Hi, my name is Jane...") as HTMLInputElement).value).toBe(
      "Somewhere in La Mancha, in a place whose name I do not care to remember…",
    );
  });

  it("should display matching error when message is invalid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Jane Doe"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("hi@jane.com"), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Hi, my name is Jane..."), {
      target: {
        value: "S",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(submitContactForm).not.toBeCalled();
    expect((screen.getByPlaceholderText("Jane Doe") as HTMLInputElement).value).toBe("name");
    expect((screen.getByPlaceholderText("hi@jane.com") as HTMLInputElement).value).toBe(
      "test@mail.com",
    );
    expect((screen.getByPlaceholderText("Hi, my name is Jane...") as HTMLInputElement).value).toBe(
      "S",
    );
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Jane Doe"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("hi@jane.com"), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Hi, my name is Jane..."), {
      target: {
        value: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(submitContactForm).toBeCalledWith({
      language: "english",
      name: "name",
      email: "test@mail.com",
      message: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
    });
    expect((screen.getByPlaceholderText("Jane Doe") as HTMLInputElement).value).toBe("");
    expect((screen.getByPlaceholderText("hi@jane.com") as HTMLInputElement).value).toBe("");
    expect((screen.getByPlaceholderText("Hi, my name is Jane...") as HTMLInputElement).value).toBe(
      "",
    );
  });
});
