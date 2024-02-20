import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  StackDivider,
  Text,
  Badge,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { nikParser } from "nik-parser";
import { useState } from "react";
import { GrContactInfo } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function App() {
  const [ktp, setKtp] = useState(null); // Ubah ke string dan tambahkan 0 pada akhir NIK
  const [invalid, setInvalid] = useState(false);
  const [nik, setNik] = useState(null);

  const handleClick = () => {
    if (ktp.length === 16) {
      setNik(nikParser(ktp));
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-between py-4 px-3 sticky top-0 items-center">
        <h1 className="flex flex-row items-center gap-2 font-bold text-2xl text-white">
          <GrContactInfo />
          NIK Inspector
        </h1>
        <div>
          <Button leftIcon={<FaGithub />}>Github</Button>
        </div>
      </nav>
      <div className="flex min-h-screen justify-center items-center -mt-24">
        <div className="flex flex-col max-w-4xl container space-y-7 px-7 py-10">
          <Heading className="flex flex-row items-center gap-5">
            <GrContactInfo />
            NIK Inspector
          </Heading>
          <form action="" className="space-y-4">
            <FormControl isInvalid={invalid}>
              <FormLabel>NIK</FormLabel>
              <Input
                type="text" // Ubah type dari "number" ke "text"
                value={ktp}
                maxLength={16}
                onChange={(e) => setKtp(e.target.value)}
              />
              {invalid ? (
                <FormErrorMessage>
                  NIK harus terdiri dari 16 digit
                </FormErrorMessage>
              ) : (
                <FormHelperText>
                  Silahkan masukkan data NIK anda.
                </FormHelperText>
              )}
            </FormControl>
            <Button colorScheme="teal" onClick={handleClick}>
              Input
            </Button>
          </form>
          {nik && (
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box h="40px">
                <Text fontWeight={"semibold"}>Is Valid :</Text>
                <Badge>String({nik.isValid().toString()})</Badge>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Provinsi :</Text>
                <Text>{nik.province()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Id Kabupaten / Kota :</Text>
                <Text>{nik.kabupatenKotaId()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Kabupaten / Kota :</Text>
                <Text>{nik.kabupatenKota()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Id Kecamatan :</Text>
                <Text>{nik.kecamatanId()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Kecamatan :</Text>
                <Text>{nik.kecamatan()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Kode Pos :</Text>
                <Text>{nik.kodepos()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Jenis Kelamin :</Text>
                <Text>{nik.kelamin()}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Tanggal Lahir :</Text>
                <Text>{String(nik.lahir())}</Text>
              </Box>
              <Box h="40px">
                <Text fontWeight={"semibold"}>Kode Unik :</Text>
                <Text>{nik.uniqcode()}</Text>
              </Box>
            </VStack>
          )}
        </div>
      </div>
      <footer className=" text-gray-700 text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Jouska Brillian. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
