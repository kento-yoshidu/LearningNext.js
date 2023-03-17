import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import { getPage } from "next-page-tester"
import { initTestHelpers } from "next-page-tester"
import { async } from "rxjs"

initTestHelpers()

describe('Navigation by Link', () => {
  it("Should route to selected page in navbar", async () => {
    const { page } = await getPage({
      route: "/index"
    })
    render(page)

    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('Blog Page')).toBeInTheDocument()
    // screen.debug()

    userEvent.click(screen.getByTestId("comment-nav"))
    expect(await screen.findByText('Comment Page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId("context-nav"))
    expect(await screen.findByText('Context Page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId("todos-nav"))
    expect(await screen.findByText('Task Page')).toBeInTheDocument()
  })
})
