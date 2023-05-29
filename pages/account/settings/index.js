import { useSettings } from "@/api/api";
import { Button } from "@/components/shared/Buttons";
import { Title } from "@/components/shared/Title";
import { Input } from "@/forms/Input";
import Head from "next/head";

export default function Settings() {
  const { setSettings, settings, handleSubmit } = useSettings();
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <main className="min-h-[70vh] flex flex-col items-center justify-center py-14">
        <Title text={"Account Settings"} />
        <form className="flex flex-col items-center justify-center mt-4 py-8 px-16  border rounded-lg border-gray-200 w-[30rem]">
          <img
            className="rounded-full mb-6"
            width={80}
            height={80}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div>
            <div className="mb-4 block md:flex justify-between">
              <Input
                onChange={(e) =>
                  setSettings({ ...settings, firstName: e.target.value })
                }
                value={settings.firstName}
                label="First Name"
                type="text"
              />
              <span className="px-4"></span>
              <Input
                onChange={(e) =>
                  setSettings({ ...settings, lastName: e.target.value })
                }
                value={settings.lastName}
                label="Last Name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <Input
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
                }
                value={settings.email}
                label="Email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <Input
                onChange={(e) =>
                  setSettings({ ...settings, oldPassword: e.target.value })
                }
                value={settings.oldPassword}
                type="password"
                label="Old Password"
              />
            </div>
            <div className="mb-4">
              <Input
                onChange={(e) =>
                  setSettings({ ...settings, password: e.target.value })
                }
                value={settings.password}
                type="password"
                label="New Password"
              />
            </div>
            <div className="mb-6">
              <Input
                value={settings.passwordConfermation}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    passwordConfermation: e.target.value,
                  })
                }
                type="password"
                label="Confirm Password"
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Button onClick={(e) => handleSubmit(e)} px="8">
              Update
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
